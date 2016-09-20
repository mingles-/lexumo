import React from "react"
import {connect} from "react-redux"
import {fetchRepos, setPage, setLanguage, setSort, setOrder, setText} from "../actions/reposActions"

// bootstrap imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');
var Pagination = require('react-bootstrap/lib/Pagination');

@connect((store) => {
  return {
    reposFetched: store.repos.fetched,
    reposFetching: store.repos.fetching,
    repos: store.repos.repos,
    page: store.repos.page,
    language: store.repos.language,
    sort: store.repos.sort,
    order: store.repos.order,
    text: store.repos.text,
  };
})

export default class Layout extends React.Component {

  fetchRepos(props) {
    this.props.dispatch(fetchRepos(props.page, props.language, props.sort, props.order, props.text));
  }

  setPage(eventKey) {
    this.props.dispatch(setPage(eventKey));
  }

  setLanguage(language) {
    this.props.dispatch(setLanguage(language));
  }

  setSort(sort) {
    this.props.dispatch(setSort(sort));
  }

  setOrder(order) {
    this.props.dispatch(setOrder(order));
  }

  setText() {
    var text = document.getElementById("input").value;
    this.props.dispatch(setText(text));
  }

  componentWillMount() {
    this.fetchRepos(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && !this.props.reposFetching && this.props.reposFetched) {
      this.fetchRepos(nextProps);
    }

  }

  getStyle(part, selected) {
    if (part == selected) {
      return {backgroundColor: "red"}
    } else {
      return {}
    }
  }

  render() {
    const {repos, reposFetched, page, language, sort, order, text} = this.props;
    var mappedRepos, pagination;

    if (reposFetched) {
      mappedRepos = repos.map(repo =>
          <Row key={repo.id}>
            <Col sm={6}>
              <a href={repo.html_url} target="_blank">{repo.name}</a>
            </Col>
            <Col sm={2}>
              {repo.stargazers_count}
            </Col>
            <Col sm={2}>
              {repo.forks_count}
            </Col>
            <Col sm={2}>
              {repo.updated_at}
            </Col>
          </Row>);

      pagination = <Pagination
          bsSize="medium"
          items={10}
          activePage={page}
          onSelect={this.setPage.bind(this)}/>
    }
    return <div style={{padding: 50}}>
      <Col sm={6}>
        <h1>controls</h1>
        <Row>
          <Col md={4}>
            Language:
          </Col>
          <Col md={6}>
            <button onClick={this.setLanguage.bind(this, "c")} style={this.getStyle("c", language)}>c</button>
            <button onClick={this.setLanguage.bind(this, "cpp")} style={this.getStyle("cpp", language)}>C++</button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            Sort:
          </Col>
          <Col md={6}>
            <button onClick={this.setSort.bind(this, "")} style={this.getStyle("", sort)}>Best Match</button>
            <button onClick={this.setSort.bind(this, "stars")} style={this.getStyle("stars", sort)}>stars</button>
            <button onClick={this.setSort.bind(this, "forks")} style={this.getStyle("forks", sort)}>forks</button>
            <button onClick={this.setSort.bind(this, "updated")} style={this.getStyle("updated", sort)}>updated</button>
          </Col>
        </Row>
        {(sort != "") ?
            <Row>
              <Col md={4}>
                Order:
              </Col>
              <Col md={6}>
                <button onClick={this.setOrder.bind(this, "asc")} style={this.getStyle("asc", order)}>Ascending</button>
                <button onClick={this.setOrder.bind(this, "desc")} style={this.getStyle("desc", order)}>Descending
                </button>
              </Col>
            </Row>
            :
            ""}
        <Row>
          <Col md={4}>
            Keyword:
          </Col>
          <Col md={6}>
            <input type="text" id="input"/>
            <button onClick={this.setText.bind(this)}>Search</button>
          </Col>
        </Row>
      </Col>

      <Col sm={6}>
        <Row>
          <Col sm={6}>
            <h3 style={{fontWeight: 'bold'}}>Name</h3>
          </Col>
          <Col sm={2}>
            <h3 style={{fontWeight: 'bold'}}>Stars</h3>
          </Col>
          <Col sm={2}>
            <h3 style={{fontWeight: 'bold'}}>Forks</h3>
          </Col>
          <Col sm={2}>
            <h3 style={{fontWeight: 'bold'}}>Updated</h3>
          </Col>
        </Row>
        {mappedRepos}
        {pagination}
      </Col>
    </div>;
  }
}
