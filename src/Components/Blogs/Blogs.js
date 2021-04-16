import React from 'react';
import founder from '../../images/founder.jpg';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';
import BlogsContent from './BlogsContent';
const blogsText = [
    {
        id: '1',
        name: 'Md Naimur Rahman Durjoy',
        img: founder,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed possimus officia impedit alias? Incidunt, odit! Quidem doloribus provident error exercitationem vitae tempore expedita cum temporibus, qui animi assumenda natus aliquam eius quasi harum placeat facilis minus ad dignissimos repellendus nemo. Ipsum vero quae aliquid ut quibusdam deserunt laborum est vel deleniti, ratione non, ea molestias nihil odit suscipit sed fuga magni sunt minima ullam fugiat delectus quidem maxime? Reiciendis ipsa quisquam esse tenetur! Voluptatum eos dicta alias incidunt adipisci quas fugit sunt molestias ullam, itaque enim repellat quia mollitia? Nisi minima inventore eum, eveniet tempora quas est explicabo perspiciatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '2',
        name: 'Md Naimur Rahman Durjoy',
        img: founder,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed possimus officia impedit alias? Incidunt, odit! Quidem doloribus provident error exercitationem vitae tempore expedita cum temporibus, qui animi assumenda natus aliquam eius quasi harum placeat facilis minus ad dignissimos repellendus nemo. Ipsum vero quae aliquid ut quibusdam deserunt laborum est vel deleniti, ratione non, ea molestias nihil odit suscipit sed fuga magni sunt minima ullam fugiat delectus quidem maxime? Reiciendis ipsa quisquam esse tenetur! Voluptatum eos dicta alias incidunt adipisci quas fugit sunt molestias ullam, itaque enim repellat quia mollitia? Nisi minima inventore eum, eveniet tempora quas est explicabo perspiciatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '3',
        name: 'Md Naimur Rahman Durjoy',
        img: founder,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed possimus officia impedit alias? Incidunt, odit! Quidem doloribus provident error exercitationem vitae tempore expedita cum temporibus, qui animi assumenda natus aliquam eius quasi harum placeat facilis minus ad dignissimos repellendus nemo. Ipsum vero quae aliquid ut quibusdam deserunt laborum est vel deleniti, ratione non, ea molestias nihil odit suscipit sed fuga magni sunt minima ullam fugiat delectus quidem maxime? Reiciendis ipsa quisquam esse tenetur! Voluptatum eos dicta alias incidunt adipisci quas fugit sunt molestias ullam, itaque enim repellat quia mollitia? Nisi minima inventore eum, eveniet tempora quas est explicabo perspiciatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    }
]


const Blogs = () => {
    return (
        <>
            <MenuBar />
            <div className="container">
                <h4 className="text-center mt-5">New Blogs</h4>
                <div className="row">
                    {
                        blogsText.map(blog => <BlogsContent key={blog.id} blog={blog}></BlogsContent>)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;