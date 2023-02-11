import main from '../Styles/main.module.css'
import { Box, Badge, Text, Divider, Center, Stack, Flex, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Select, Button, Heading, Grid, GridItem } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import Hero from '@/Components/Hero'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Products from '@/Components/Products'
import Testimonials from '@/Components/Testimonials'
import Contact from '@/Components/Contact'
import Features from '@/Components/Features'
import { useColorModeValue } from '@chakra-ui/color-mode'

const Home = (props) => {
	return (
		<div className={main.container}>
			<Header merchant={props.merchant} />
			<Hero />
			<Features />
			<Products data={props.products} />
			<Testimonials />
			<Contact />
			<Footer merchant={props.merchant} />
		</div>
	)
}

export default Home