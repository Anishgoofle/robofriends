import React from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';
import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
	return {

		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
 return{
	onSearchChange: (event) => dispatch(setSearchField(event.target.value))

    }
}

class App extends React.Component{
	constructor(){
		super()
		this.state ={

	     robots : [],
	     searchfield : ''
          }
		}

		componentDidMount(){
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>this.setState({robots: users}));
		}
		
    render(){
    	const { robots } = this.state;
    	const { searchField, onSearchChange } = this.props;
    	const filterRobots = robots.filter(robot =>{
           	 return robot.name.toLowerCase().includes(searchField.toLowerCase());
           	})
	   return !robots.length ?
	     <h1>Loading</h1>:
	     (
		    <div className ='tc'>
		      <h1 className = 'f1'>RoboFriends</h1>
		      <SearchBox searchChange = {onSearchChange}/>
		      <Scroll>
		      <ErrorBoundary>
		      <CardList robots ={filterRobots}/>
		      </ErrorBoundary>
		      </Scroll>
		    </div>
		      );
           }
       }

export default connect(mapStateToProps, mapDispatchToProps)(App);