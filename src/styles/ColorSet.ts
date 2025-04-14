export type ColorSet = {
  bg: {
    primary: string;
    secondary: string;
    inverse: string;
  };
  text: {
    primary: string;
    secondary: string;
    hint: string;
    inverse: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  icon: {
    primary: string;
    secondary: string;
  };
};

export const colorSet: ColorSet = {
  bg: {
    primary: "#ffffff",
    secondary: "#f8f8f8",
    inverse: "#000",
  },
  text: {
    primary: "#000",
    secondary: "#697278",
    hint: "#b4b9bc",
    inverse: "#ffffff",
  },
  border: {
    primary: "#05141f",
    secondary: "#cdd0d2",
  },
  icon: {
    primary: "#05141f",
    secondary: "#b4b9bc",
  },
};
