import TabProvider from "./providertab";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]



export default function Formbannerprovider() {
    return (
        <div className="relative bg-white overflow-hidden hero-bg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 form-tab">
               <TabProvider/>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                {/*<img*/}
                {/*    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"*/}
                {/*    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"*/}
                {/*    alt=""*/}
                {/*/>*/}
            </div>
        </div>
    )
}
