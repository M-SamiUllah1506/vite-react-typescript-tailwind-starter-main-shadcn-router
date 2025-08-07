// import React from 'react'
// import { Checkbox } from '@/components/ui/checkbox'
// import Linear from './components/ui/Linear'
// import { Calendar } from '@/components/ui/calendar'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from '@/components/ui/table'

// const App = () => {
//   const [date, setDate] = React.useState<Date | undefined>(new Date())

//   return (
//     <div className="bg-green-500">
//       <div className="text-3xl font-bold underline">
//         Hello World From This Side Where we Bring Idea To Reality
//       </div>
//       <Linear />
//       <Checkbox className="bg-black" />
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-lg border bg-yellow-400"
//       />

//       <DropdownMenu>
//         <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//         <DropdownMenuContent className="bg-gray-600">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//           <DropdownMenuItem>Billing</DropdownMenuItem>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuItem>Subscription</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Invoice</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Method</TableHead>
//             <TableHead className="text-right">Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">INV001</TableCell>
//             <TableCell>Paid</TableCell>
//             <TableCell>Credit Card</TableCell>
//             <TableCell className="text-right">$250.00</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>

//       <Tabs defaultValue="account" className="w-[400px]">
//         <TabsList>
//           <TabsTrigger value="account">Account</TabsTrigger>
//           <TabsTrigger value="password">Password</TabsTrigger>
//         </TabsList>
//         <TabsContent value="account">
//           Make changes to your accounts here.
//         </TabsContent>
//         <TabsContent value="password">Change your password here.</TabsContent>
//       </Tabs>
//     </div>
//   )
// }

// export default App

// // import React from 'react'
// // import Home from './Pages/Home'
// // import Navbar from './components/Navbar'
// // import About from './Pages/About';
// // import Product from './Pages/Product'
// // import Contant from './Pages/Contant';
// // import { Routes, Route } from 'react-router-dom';
// // import Contactlayout from './layout/Contactlayout';
// // import ContactInfo from './components/ContactInfo';
// // import ContactForm from './components/ContactForm';
// // import Notfound from './Pages/Notfound';
// // import Joblayout from './layout/Joblayout';
// // import Jobs from './Pages/Jobs';
// // const App = () => {
// //   return (
// //     <div>
// //       <Navbar />
// //       <Routes>
// //         <Route path='/Home' element={<Home />} />
// //         <Route path='/About' element={<About />} />
// //         <Route path='/Product' element={<Product />} />
// //         <Route path='/Contant' element={<Contactlayout />}>

// //           <Route path='Info' element={<ContactInfo />} />
// //           <Route path='Form' element={<ContactForm />} />
// //         </Route>
// //         <Route path='Jobs' element={<Joblayout />}>
// //           <Route index element={<Jobs />} />
// //         </Route>
// //         <Route path='*' element={<Notfound />} />
// //       </Routes>
// //     </div>
// //   )
// // }
// // export default App

// import React from 'react'
// import Home from './Pages/Home'
// import Navbar from './components/Navbar'
// import About from './Pages/About';
// import Product from './Pages/Product'
// import Contant from './Pages/Contant';
// import { Routes, Route } from 'react-router-dom';
// import Contactlayout from './layout/Contactlayout';
// import ContactInfo from './components/ContactInfo';
// import ContactForm from './components/ContactForm';
// import Notfound from './Pages/Notfound';
// import Joblayout from './layout/Joblayout';
// import Jobs from './Pages/Jobs';
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/Home' element={<Home />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/Product' element={<Product />} />
//         <Route path='/Contant' element={<Contactlayout />}>

//           <Route path='Info' element={<ContactInfo />} />
//           <Route path='Form' element={<ContactForm />} />
//         </Route>
//         <Route path='Jobs' element={<Joblayout />}>
//           <Route index element={<Jobs />} />
//         </Route>
//         <Route path='*' element={<Notfound />} />
//       </Routes>
//     </div>
//   )
// }
// export default App
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, increaseByAmount } from './Features/appSlice'

// const App = () => {
//     const count = useSelector((state:any) => state.counter.value)
//     const dispatch = useDispatch()

//     return (
//         <div className="text-center mt-10">
//             <h1 className="bg-red-600 text-3xl mb-4">Counter: {count}</h1>
//             <button onClick={() => dispatch(increment())} className="bg-green-600 px-4 py-2 text-white mx-1">+</button>
//             <button onClick={() => dispatch(decrement())} className="bg-red-600 px-4 py-2 text-white mx-1">-</button>
//             <button onClick={() => dispatch(increaseByAmount(54))} className="bg-green-400 px-4 py-2 text-white mx-1">5</button>
//         </div>
//     )
// }

// export default App



// src/App.tsx
import React from 'react';
import Buttons from './components/Buttons';

const App: React.FC = () => {
    return (
        <div className="container mx-auto my-10 text-center px-4">
            <h1 className="text-4xl font-bold mb-6">Api Calling Through Axios </h1>
            <Buttons />
        </div>
    );
};

export default App;
