import React, { Component } from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import RowLayout from '../Layout/RowLayout';

import content from '../content';

class Event extends Component {
    render() {
        var data = content.events[this.props.match.params.event_name];
        return (
            <div>
                <ImageCarousel images={data.images} />
                <RowLayout content={data.description} />
            </div>
        );
    }
}

export default Event;
