import React from 'react';
import PropTypes from 'prop-types';

import { TagTable, TagTableBody, TagTableHead, TagTableRow, TagTableCell, TagPaper } from '../styles';

const Tag = ({id, name, description }) => (

    <TagTableRow>
      <TagTableCell>{id}</TagTableCell>
      <TagTableCell>{name}</TagTableCell>
      <TagTableCell>{description}</TagTableCell>
    </TagTableRow>


);

Tag.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Tag.defaultProps = {
  description: 'This post has no content',
};

export default Tag;