import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, Text, View, ScrollView, Image  } from 'react-native'
import { fetchData } from '../../actions/index'
import styles from './styles'

class Hotels extends Component {

	constructor(props){
		super(props)
		this.state ={ isLoading: false}
	}

	componentWillMount() {
        this
            .props
            .fetchData()
    }

	getHotelsShow(){
		const { hotels } = this.props
		
		if(hotels.data){
			return  hotels.data
					.map( (hotel, index) => {
						return(
							<View key = {index} style = {styles.itemList}>
								<Text> Hotel : {hotel.name} </Text> 
								<Text> Stars: {hotel.stars} </Text> 
								<Text> Price : {hotel.price} </Text>   
								<Image 
										source={{ uri : hotel.url }}
       									style={{width: 400, height: 200}} 
       							/>                
							</View>
						)
				} ) 
		}
		 
	}

	render(){
		return(

			<View style = {styles.containerList}> 	
				<ScrollView> 
					{ this.props.hotels.isFetching && 
						<View style={styles.loading}>
	          				<ActivityIndicator/>
	        			</View>
	        		} 	
					{ this.props.hotels.data 
						? this.getHotelsShow() 
						: null 
					}  
				</ScrollView>
			</View>

		)
	}
	
}

const mapStateToProps = state => {
		return {
			 hotels : state.data
		}	
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData : () => {
			return dispatch(fetchData())
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)


