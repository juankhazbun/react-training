import React, { Component } from 'react';
import Section from './Section';

var exps = [
  {
    'title': 'Experiencia 1',
    'message': 'Esta es mi experiencia #1'
  },
  {
    'title': 'Experiencia 2',
    'message': 'Esta es mi experiencia #2'
  },
  {
    'title': 'Experiencia 3',
    'message': 'Esta es mi experiencia #3'
  },
];

class SectionList extends Component {

  render() {
    var sections = exps.map(function(exp) {
                     return (
                        <Section
                          title={exp.title}
                          message={exp.message}
                        />
                     )
                 });
    return (
      <div>
        { sections }
      </div>
    );
  }
}

export default SectionList;
