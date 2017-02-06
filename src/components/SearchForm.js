// @flow

import React, {
  Component,
  PropTypes,
} from 'react';
import queryString from 'query-string';

type Props = {
  pushRoute: Function,
  searchQuery: string,
};

type State = {
  inputValue: string,
};

class SearchForm extends Component {

  props: Props;
  state: State;

  static propTypes = {
    pushRoute: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchQuery: '',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: this.props.searchQuery,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.searchQuery !== this.props.searchQuery) {
      this.setInputValueState(nextProps.searchQuery);
    }
  }

  pushUrlQuery(value: string): void {
    this.props.pushRoute({
      path: '/',
      search: queryString.stringify({
        query: value,
      }),
    });
  }

  setInputValueState(inputValue: string): void {
    this.setState(() => ({inputValue}));
  }

  handleOnChange = (event: Object): void => {
    event.persist();
    this.setInputValueState(event.target.value);
  }

  handleOnSubmit = (event: Object): void => {
    event.preventDefault();
    if (!this.state.inputValue) {return;}
    this.pushUrlQuery(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="searchInput">Search for a user</label>
        <input
          type="text"
          id="searchInput"
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;