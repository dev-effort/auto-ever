import { AxiosError } from "axios";

type ErrorData = {
  code: number;
  detail: unknown;
  errorCode: {
    messageId: MessageId;
  };
  message: string;
  status: string;
  timeStamp: number;
};

type MessageId =
  | "TOKEN.ERROR.NOT_EXIST_TOKEN"
  | "ACCESS.TOKEN.ERROR.TOKEN_HAS_EXPIRED"
  | "REFRESH.TOKEN.ERROR.TOKEN_HAS_EXPIRED"
  | "ACCESS.TOKEN.ERROR.TOKEN_INVALID"
  | "REFRESH.TOKEN.ERROR.TOKEN_INVALID";

/**
 * HttpErrHandler를 extends를 통해 필요한 http err status를 확장하여 사용
 */
export interface HttpErrHandler {
  [index: number | string]: ((err: AxiosError<ErrorData>) => void) | undefined;
  default?: (err: AxiosError<ErrorData>) => void;
  common?: (err: AxiosError<ErrorData>) => void;
}

// 네트워크 에러를 위한 상수 정의
const NETWORK_ERROR_STATUS = 0;

// 타입 가드 함수 추가
function isAxiosErrorWithResponse(
  error: AxiosError<ErrorData>
): error is AxiosError<ErrorData> & { response: { status: number } } {
  return (
    error.response !== undefined && typeof error.response.status === "number"
  );
}

const defaultHandlers: HttpErrHandler = {
  [NETWORK_ERROR_STATUS]: (err: AxiosError<ErrorData>) => {
    console.error("네트워크 연결 실패:", err.message);
  },
  default: (err: AxiosError<ErrorData>) => {
    console.error(err);
  },
  common: (err: AxiosError<ErrorData>) => {
    console.error(err);
  },
};

export const handleError = (
  error: AxiosError<ErrorData>,
  handlers?: HttpErrHandler
) => {
  // 네트워크 에러 체크 및 안전한 타입 처리
  let httpStatus: number;

  if (!isAxiosErrorWithResponse(error)) {
    // 네트워크 에러나 response가 없는 경우
    httpStatus = NETWORK_ERROR_STATUS;
  } else {
    httpStatus = error.response.status;
  }

  switch (true) {
    case handlers && !!handlers[httpStatus]:
      handlers[httpStatus]?.(error);
      break;
    case !!defaultHandlers[httpStatus]:
      defaultHandlers[httpStatus]?.(error);
      break;
    default:
      if (handlers && !!handlers.default) handlers.default(error);
      else defaultHandlers.default?.(error);
  }

  // 공통 처리 로직 수행
  if (handlers && !!handlers.common) handlers.common(error);
  else defaultHandlers.common?.(error);
};

export interface SystemErrorHandler extends HttpErrHandler {
  400: (err: AxiosError<ErrorData>) => void;
  401: (err: AxiosError<ErrorData>) => void;
  403: (err: AxiosError<ErrorData>) => void;
}
