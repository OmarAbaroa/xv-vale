import background from "../assets/invitationBgBlue.png";


function Home() {
  return (
		<div style={styles.body} className="body">
			<div className="bg-img" style={styles.bgImage}>
				<div className="container">
					<div className="row py-5">
Hola
					</div>
				</div>
			</div>
		</div>
	);
}

const styles = {
	body: {
		minHeight: "100vh",
		background: "linear-gradient(128deg, rgba(40,62,95,1) 0%, rgba(80,130,168,1) 50%, rgba(97,141,167,1) 100%)"
	},
	bgImage: {
		backgroundImage: `url(${background})`,
		backgroundSize: "cover",
		backgroundPosition: "op center",
		width: "100%",
	}
}

export default Home