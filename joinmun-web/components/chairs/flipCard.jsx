import { useState } from "react";

const FlipCard = ({ title, backText, frontLogo, backLogo }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const styles = {
		cardStyle: {
			width: "350px",
			height: "280px",
			transform: "scale(1)",
			transition: "transform 0.3s ease",
		},
		hoveredStyles: {
			transform: "scale(1.1)",
		},
		innerStyle: {
			width: "100%",
			height: "100%",
			transition: "transform 0.6s",
			transformStyle: "preserve-3d",
			transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
		},
		frontStyle: {
			position: "absolute",
			width: "100%",
			height: "100%",
			backfaceVisibility: "hidden",
		},
		backStyle: {
			position: "absolute",
			width: "100%",
			height: "100%",
			transform: "rotateY(180deg)",
			backfaceVisibility: "hidden",
		},
		background: {
			width: "80%",
			height: "100%",
			position: "absolute",
			marginLeft: "auto",
			marginRight: "auto",
			left: 0,
			right: 0,
			backgroundImage: 'url("/chairs/bg.png")',
			backgroundRepeat: "no-repeat",
			backgroundSize: "contain",
			borderRadius: "10%",
			boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
		},
		frontImage: {
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundImage: 'url("/chairs/front-image.png")',
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		},
		frontLogo: {
			fontSize: "0.5rem",
			lineHeight: "0.5rem",
			letterSpacing: "0.1rem",
			position: "absolute",
			width: "60%",
			height: "60%",
			margin: "3rem auto",
			left: 0,
			right: 0,
			backgroundImage: `url(${frontLogo})`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		},
		flipCardBack: {
			transform: "rotateY(180deg)",
		},
		frontTitle: {
			fontWeight: "bold",
			fontSize: "0.7rem",
			color: "#8F5632",
			position: "absolute",
			width: "100%",
			height: "19%",
			margin: "0 auto",
			bottom: 0,
			left: 0,
			right: 0,
			textAlign: "center",
			lineBreak: "normal",
			maxWidth: "50%",
		},
		backText: {
			paddingTop: "5%",
			position: "absolute",
			width: "100%",
			height: "100%",
			textAlign: "center",
		},
		backTitle: {
			fontWeight: "bold",
			maxWidth: "70%",
			position: "relative",
			lineBreak: "auto",
			margin: "0 auto",
			marginBottom: "5%",
			left: 0,
			right: 0,
		},
		backDescription: {
			position: "relative",
			margin: "0 auto",
			lineBreak: "normal",
			maxWidth: "70%",
			maxHeight: "70%",
			wordWrap: "break-word",
			overflowX: "hidden",
			overflowY: "scroll",
			paddingLeft: "5%",
			paddingRight: "5%",
		},
		backLogo: {
			position: "absolute",
			width: "65%",
			height: "65%",
			margin: "4rem auto",
			left: 0,
			right: 0,
			backgroundImage: `url(${backLogo})`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		},
	};

	const combinedStyles = isHovered
		? { ...styles.cardStyle, ...styles.hoveredStyles }
		: styles.cardStyle;

	return (
		<div
			className="cardStyle"
			style={combinedStyles}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="innerStyle" style={styles.innerStyle}>
				<div className="frontStyle" style={styles.frontStyle}>
					<div
						className="background-card bg-red"
						style={styles.background}
					></div>
					<div className="frontImage" style={styles.frontImage}>
						<div className="frontTitle" style={styles.frontTitle}>
							{title}
						</div>
						<div className="frontLogo" style={styles.frontLogo}></div>
					</div>
				</div>
				<div className="backStyle" style={styles.backStyle}>
					<div
						className="background-card bg-red"
						style={styles.background}
					></div>
					<div className="backLogo" style={styles.backLogo}></div>
					<div className="backText" style={styles.backText}>
						<div className="backtitle" style={styles.backTitle}>
							{title}
						</div>
						<div
							className="backDescription scrollbar-card-back"
							style={styles.backDescription}
						>
							{backText}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
