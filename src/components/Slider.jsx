import AwesomeSlider from "react-awesome-slider";
import styled from "styled-components";

const Slide = styled.img`
    height: 50% !important;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`;

function Slider({images: []}) {
    return (
        <AwesomeSlider>
            {images.map((image) => (
                 <Slide key={image} data-src={image} />
            ))}
        </AwesomeSlider>
    );
}
export default Slider;
