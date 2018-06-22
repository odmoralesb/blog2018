import React, { Component } from 'react';
import Tag from './Tag';
import TagForm from './TagForm';

import { TagTable, TagTableBody, TagTableHead, TagTableRow, TagTableCell, TagPaper } from './styles';

const tagsData = [
  { id: 1, name: 'tag2', description: 'Esto es una prueba' }
];

class Tags extends Component {

  state = {
    tags: [...tagsData],
  };

  createTag = tag => {
    const tagWithId = Object.assign({}, tag, { id: this.state.tags.length + 1 });
    const tags = this.state.tags.concat(tagWithId);
    this.setState({ tags });
  }

  render() {


    const tags = this.state.tags.map(tag => (
      <Tag key={tag.id} id={tag.id} name={tag.name} description={tag.description} />
    ));

    return (
      <div>

        <TagForm createTag={this.createTag} />   

        



        <TagPaper>
        <TagTable>
          <TagTableHead>
            <TagTableRow>
              <TagTableCell>ID</TagTableCell>
              <TagTableCell>Nombre</TagTableCell>
              <TagTableCell>Descripcion</TagTableCell>
            </TagTableRow>
          </TagTableHead>
          <TagTableBody>

          {tags}

            

          </TagTableBody>
        </TagTable>
      </TagPaper>        




      </div>
    );
  }


}

export default Tags;
