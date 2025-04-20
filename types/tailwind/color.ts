export type TwColor = "red" | "blue" | "green" | "gray" | "yellow" | "pink" | "indigo";
export type TwShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export type TwTextColor = `${TwColor}-${TwShade}`;
export type TwClassTextColor = `text-${TwColor}-${TwShade}`;