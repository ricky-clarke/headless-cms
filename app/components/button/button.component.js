import { ButtonStyle } from "./button-styles";

export default function Button ( props ) {

    const { url, title } = props;

    return (
        <>
          <ButtonStyle href={url}>{title}</ButtonStyle>
        </>
    )
}