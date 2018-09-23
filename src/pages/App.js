import React from 'react'
import SearchBar from '../component/SearchBar'
import BlogList from '../component/BlogList'
// export ada 2 default= React & const= { App }
const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            search: "",
            blogs : [],
            blogFilter : []
        }
        
    }

    componentDidMount(){
        this.handleGetBlogs();
        console.log("blogs : "+this.state.blogs);
    }

    handleTypeSearch = event => {
        let blogFiltered = this.state.blogs.filter((blog) => {
            return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        // this.setState({
        //     search: event.target.value
        // })
        this.setState({ blogFilter: blogFiltered })
        // console.log("event: "+event.target.value)
        console.log("state: "+this.state.search)
    }
    handleGetBlogs = () => {
        fetch(link)
        .then( res => res.json())
        .then( res => this.setState({blogs: res, blogFilter: res, loading: false}))
        // console.log("blogs : "+this.state.blogs);
    }


    render(){
        if(this.state.loading){
            return(
                <div>Loading..</div>
            )
        }
        // console.log(this.state.blogFilter)
        return (
            <div>
                
                <SearchBar 
                    // search={this.state.search} 
                    onChangeSearch={this.handleTypeSearch} />
                {this.state.blogFilter.map((blog, index) => (
                    // map component harus kurung bukan bracket
                    <BlogList 
                        key={index}
                        title={blog.title}
                        content={blog.content}
                        author={blog.author}
                        date={blog.created_at}
                    />
                ))}
                {/* <h1 align="center">loading: {JSON.stringify(this.state.loading)}</h1> */}
            </div>
        )
    }
}

export default App