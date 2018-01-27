import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import LinkList from '../../components/LinkList/LinkList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { compareKey } from '../../utils';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filteredList: [],
      compare: 'upvotes',
      error: false,
      loading: true,
      loaded: false,
    };
  }

  componentDidMount() {
    const data = {};
    fetch('http://www.mocky.io/v2/5a6bc16631000078341b8b77')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('request failed');
        }
        this.setState({ loading: false });
        return res.json();
      })
      .then((list) => {
        data.links = list.links;
        data.links.sort(compareKey(this.state.compare));
        this.setState({
          list: list.links,
          filteredList: data.links,
          loading: false,
          loaded: true,
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  filter(value) {
    const newList = this.state.list.filter((item) => {
      if (item.meta
          && item.meta.title
          && item.meta.title.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    });
    this.setState({ filteredList: newList.sort(compareKey(this.state.compare)) });
  }

  render() {
    const {
      loaded,
      error,
      filteredList,
      loading,
    } = this.state;
    return (
      <div className={styles.App}>
        <Header
          onSearch={event => this.filter(event.target.value)}
          onChangeSort={newSort => this.setState({
            compare: newSort,
            filteredList: this.state.filteredList.sort(compareKey(newSort)),
          })}
          sortOrder={this.state.compare}
        />
        <LinkList
          error={error}
          haystack={filteredList}
          loading={loading}
          loaded={loaded}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
