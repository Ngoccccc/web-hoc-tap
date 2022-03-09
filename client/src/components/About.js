import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const About = () => {
    return (
        <Row className='mt-5' style={{ marginRight: 0 }}>
        <>
            <h2 className="mt-5" style={{ textAlign: "center" }}>Do Your Best</h2>
            <h4 className="mt-2" style={{ textAlign: "center" }}>The rest will come</h4>
        </>
			<Col className='text-center'>
				<Button
					variant='primary'
					href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
					size='lg'
				>
					Click vào đây sẽ có bất ngờ hehe
				</Button>
			</Col>
		</Row>
    )
};

export default About

