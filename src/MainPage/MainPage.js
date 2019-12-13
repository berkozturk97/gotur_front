import React from 'react';
import './MainPage.css';
import logo from '../img/gotur.png';
import searchIcon from '../img/search.png'
import Auxx from '../hoc/Auxx';
import Post from '../components/Post/Post';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';
import CategoryItem from '../components/Category/CategoryItem/CategoryItem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { history } from '../App';



class MainPage extends React.Component {
    state = {
        data: [],
        categoryData: [],
        error: false,
        query: "",
        isVisible: true
    }
    componentDidMount() {
        this.getCategory();
    }

    getCategory = async () => {
        // this.setState({ isVisible: true })
        // let body = { name: this.state.query }
        let REQUEST_URL = 'http://goturapp.herokuapp.com/mainType/get';
        await axios.get(REQUEST_URL)
            .then(response => response)
            .then(responseData => {
                console.warn(responseData.data)
                this.setState({ categoryData: responseData.data, isVisible: false })
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }
    handleChange(event) {
        this.setState({ query: event.target.value });
    }
    goDetail(item) {
        history.push({ pathname: "/catagoryDetail", search: "?query=" + item.mainType, state: { item: item } })
    }
    renderItems = () => {

        if (this.state.isVisible) {
            return (
                <Spinner />
            )
        }
        else {
            return this.state.categoryData.map(data => {
                return <CategoryItem key={data._id}
                    title={data.mainType}
                    link={data.typePhoto}
                    onClick={() => this.goDetail(data)}
                />
            });
        }
    }
    render() {
        let nameTag = this.state.query.length === 0 ? <p className="categoryText">Kategoriler</p> : <p>"{this.state.query}" için bulunan ürünler...</p> //Arda bunu sekil yap
        return (
            
                <Auxx>
                    {this.renderItems()}
                </Auxx>


        );
    }
}
export default MainPage;
