import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from './ErrorPage'
import Home from './Home'
import About from './About'
import Books from './Books'
import BookDetails from './BookDetails';
const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [

            {
                index: true,
                element: <Home></Home>
            },

            {
                path: 'home',
                element: <Home></Home>
            },

            {

                path: 'about',
                element: <About></About>,

            },
            {

                path: 'books',
                element: <Books></Books>,
                loader: () => fetch('https://api.itbook.store/1.0/new')

            },
            {


                path: 'book/:id',
                element: <BookDetails></BookDetails>,
                loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}
                    `),
            }


        ]
    }








])
export default router;