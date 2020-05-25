import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../store';
class Kanpai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { movieList, fetchData: fetchListData } = this.props;
    if (!movieList.data || !movieList.data.length) {
      fetchListData();
    }
  }
  render() {
    const { movieList } = this.props;
    console.log(`当前时间 ${Date.now()}: debug 的数据是 this.props: `, this.props);
    return (
      <div>
        <h3>this page is the Home</h3>
        {
           movieList.map(({ id, title, picUrl,cover }) => (
            <dl key={id}>
              <dt><img src={cover} alt="" srcSet="" /></dt>
              <dd>{title}</dd>
            </dl>
          ))
        }

      </div>
    );
  }
}
Kanpai.serverFetch = fetchData;

const mapDispatchToProps = {
  fetchData
}
const mapStateToProps = ({movieReducer:movieList})=>({movieList})
export default connect(mapStateToProps,mapDispatchToProps)(Kanpai)