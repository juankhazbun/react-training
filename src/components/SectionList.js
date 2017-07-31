import React, { Component } from 'react';
import Section from './Section';

class SectionList extends Component {
  render() {
    return (
      <div>
        <Section
          key="1"
          title="Experiencia"
          message="Esta es mi experiancia"
        />
        <Section
          key="2"
          title="Experiencia2"
          message="Esta es mi experiancia2"
        />
        <Section
          key="3"
          title="Experiencia3"
          message="Esta es mi experiancia3"
        />
      </div>
    );
  }
}

export default SectionList;
