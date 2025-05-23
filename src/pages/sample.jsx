<header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 space-y-4 md:space-y-0">
<div className="flex items-center space-x-1">
    <span className="text-2xl font-bold">Cargo</span>
    <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-xs select-none cursor-default">
        TON
    </div>
</div>

{/* Navigation */}
<nav className="hidden md:flex items-center flex-wrap space-x-4 md:space-x-6 text-sm font-semibold text-gray-800">
    {menuItems.map((item) => (
        <div key={item.label} className="relative group cursor-pointer">
            <span className="hover:text-yellow-400">{item.label}</span>
            {item.submenu && <span className="ml-1 text-xs">&#x25BE;</span>}
            {item.submenu && (
                <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded hidden group-hover:block z-10 min-w-[120px]">
                    {item.submenu.map((sub) => (
                        <a
                            key={sub}
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-yellow-50"
                        >
                            {sub}
                        </a>
                    ))}
                </div>
            )}
        </div>
    ))}
    <Button
        variant="contained"
        sx={{
            backgroundColor: '#fac849',
            color: 'white',
            borderRadius:0,
            fontWeight: 'bold',
            textTransform: 'none',
            px: 3,
            py: 1,
        }}
    >
        GET A QUOTE
    </Button>
    <Button
        variant="contained"
        sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius:0,
            fontWeight: 'bold',
            textTransform: 'none',
            px: 3,
            py: 1,
        }}
    >
        SIGN IN
    </Button>
</nav>
</header>