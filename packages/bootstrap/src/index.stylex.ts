import stylex from "@stylexjs/stylex";
import { tokens } from "./boostrap.tokens.stylex";

export const boostrap = stylex.create({
    borderBottom: {
        borderBottom: `${tokens.borderWidth} solid ${tokens.colorBorderDefault}!important;`
    }
})