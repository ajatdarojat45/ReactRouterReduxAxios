import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllBlogs, deleteBlog } from '../../actions/blog-action';

class List extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAllBlogs()
  }

  render() {
    return (
      <React.Fragment>
        <div id="header-title">Perry's Counter App (Context Type) ajat</div>
        {
            this.props.blogs.map((blog, index) => {
              return (
                <React.Fragment  key={index}>
                  <h4>{blog.title}</h4>
                  <button onClick={ () => this.props.deleteBlog(blog.id)}>Hapus</button>
                </React.Fragment>
            )
          })
        }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    blogs: state.blogs,
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchAllBlogs: fetchAllBlogs, deleteBlog: deleteBlog}, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
