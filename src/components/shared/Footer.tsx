
const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.</p>
            <p>Built with ❤️ using React and Redux</p>
        </footer>
    </div>
  )
}

export default Footer