export interface BadgeInterface {
    text: string;
    filled?: boolean;
}
export interface ButtonInterface {
    text: string;
    type: string;
    referencia: string;
    filled?: boolean;
    icon?: JSX.Element;
    img_icon?: string;
}
export interface CardInterface {
    indicator?: string,
    badge?: BadgeInterface,
    image?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface
    btn2: ButtonInterface
}