import React, { useState } from 'react';
import BlockWrapper from '../../../../universal_templates/blocks/section';
import { Carousel } from 'react-responsive-carousel';
import ReadingListHeader from './header';
import Card from '../../../../universal_templates/cards';
import { Image, Title } from '../../../../universal_templates/cards/partials';

const test = {
    title: [
        "UI design",
        "UX design",
        "SEO",
        "Popular",
        "Essintials",
        "Freelance"
    ]
}

function calculateSlideSize() {
    let width = document.body.offsetWidth;
    if (width < 578) return 100;
    if (width > 578 && width < 920) return 50;
    if (width > 920 && width) return 25;
}

export default function (props: {
    indent?: boolean
}) {
    let [width, setWidth] = useState(calculateSlideSize() as number);

    window.onresize = () => {
        setWidth(calculateSlideSize() as number)
    }

    return (
        <BlockWrapper indent={
            props.indent ? true : false
        }>
            <ReadingListHeader title="Reading list" />
            <Carousel
                centerMode
                centerSlidePercentage={width}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch={true}
            >
                {
                    test.title.map((value, index) => {
                        return (
                            <Card key={index}>
                                {/* https://picsum.photos/width/height */}
                                <Image className="text_align-center" src="https://picsum.photos/200/250" alt="random photo" />
                                <Title className="text_align-center text_size-subheader">{value}</Title>
                            </Card>
                        )
                    })
                }
            </Carousel>
        </BlockWrapper>
    )
}