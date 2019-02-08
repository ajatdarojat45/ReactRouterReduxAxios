import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllPodcasts, deletePodcast } from '../../actions/podcast-action';

class List extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAllPodcasts()
  }

  render() {
    return (
      <React.Fragment>
        <div id="header-title">Podcast List</div>
        {
            this.props.podcasts.map((podcast, index) => {
              return (
                <React.Fragment key={index}>
                  <h4>{podcast.name}</h4>
                  <button onClick={ () => this.props.deletePodcast(podcast.id)}>Hapus</button>
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
    podcasts: state.podcasts,
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchAllPodcasts: fetchAllPodcasts, deletePodcast: deletePodcast}, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
