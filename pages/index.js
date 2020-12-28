import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import {getMovies} from '../actions/index'
import Loader from '../components/loader'

// functional component
const Home = (props) => {
  const [loading, setLoading] = useState( false )

  // useEffect( async() => {
  //   await setLoading( true )
  //   const movies = await getMovies()
  //   await setLoading( false )
  //   setMovies(movies)
  // }, [])

  return (
    <div>
      <div className='home-page'>
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <Sidebar
                appName={'fooper'}
            />
            </div>

            <div className="col-lg-9">
              <Carousel />

              <div className="row">
                <Loader isLoading={loading} >
                {
                  <MovieList movies={props.movies || []} />
                }
                </Loader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  return (
    {movies: movies}
  )
}


// class component
// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: false,
//       errorMessage: ''
//     }
//   }

//   static async getInitialProps() {
//     const movies = await getMovies()
//     return {
//       movies: movies, // will be passed to the page component as props
//     }
//   }
//   // componentDidMount() {
//   //   this.setState({loading: true})
//   //   getMovies()
//   //     .then((movies) => {
//   //       this.setState({movies: movies, loading: false})
//   //     })
//   //     .catch((error) => {
//   //       this.setState({errorMessage: error, loading: false})
//   //     })
//   // }
  
//   render() {
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>

//         <Navbar />

//         <div className='home-page'>
//           <div className="container">
//             <div className="row">

//               <div className="col-lg-3">
//                 <Sidebar
//                   appName={'fooper'}
//               />
//               </div>

//               <div className="col-lg-9">
//                 <Carousel />

//                 <div className="row">
//                   {this.state.errorMessage && 
//                     <div className='alert alert-danger' role='alert'>
//                       {this.state.errorMessage}
//                     </div>
//                   }
//                   <Loader isLoading={this.state.loading} >
//                   {
//                     <MovieList movies={this.props.movies} />
//                   }
//                   </Loader>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />

//         <style jsx> {`
//           .home-page{
//             padding-top: 80px;
//           }
//         `}
//         </style>
    
//       </div>
//     )
//   }
// }
export default Home