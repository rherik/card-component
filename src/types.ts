export interface BadgeInterface {
    text: string;
    filled?: boolean;
    referencia?: string;
    pdf?: string;
}
export interface ButtonInterface {
    text: string;
    referencia: string;
    icon?: JSX.Element;
    img_icon?: string;
}
export interface CardInterface {
    indicator?: string;
    badge?: BadgeInterface;
    image?: string;
    title: string;
    subtitle?: string;
    body: string;
    btn: ButtonInterface;
    btn2?: ButtonInterface;
    btn3?: ButtonInterface;
    btn4?: ButtonInterface;
    btn5?: ButtonInterface;
}