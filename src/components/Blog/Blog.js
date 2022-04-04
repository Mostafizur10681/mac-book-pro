import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className=' fw-bold'>Blogs</h1>
            <hr className='w-50 mx-auto mb-5' />
            <div className='container'>
                <div className='bg-light py-3 shadow p-3 mb-5 bg-body rounded'>
                    <h2 className='text-success fw-bold pb-2'>What is Context API ?? </h2>
                    <p className='fs-5'>A React app can use the React Context API to generate global variables that can be passed around.
                        This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on.
                        Context is also marketed as a simpler, lighter way to Redux state management. eact.create All you need is Context().
                        It will give you a customer and a provider. Provider is a component that provides the state to its children, as its name suggests.
                        It will include the "store" and serve as the parent of all components that may need it.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;