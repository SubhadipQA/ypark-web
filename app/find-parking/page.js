import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
	title: "Find Parking — Coming Soon",
	description:
		"Find Parking on YPark is coming soon. We are preparing the driver experience for discovering nearby parking zones.",
};

export default function FindParkingPage() {
	return (
		<main>
			<Navbar />
			<section
				style={{
					minHeight: "calc(100vh - 160px)",
					background:
						"linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
					paddingTop: "7rem",
					paddingBottom: "3.5rem",
					position: "relative",
					overflow: "hidden",
					borderBottom: "1px solid #D6E4FF",
				}}
			>
				<div
					className="dot-pattern"
					style={{
						position: "absolute",
						inset: 0,
						opacity: 0.5,
						pointerEvents: "none",
					}}
				/>

				<div
					className="section-wrap"
					style={{
						position: "relative",
						zIndex: 1,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							width: "100%",
							maxWidth: "820px",
							background: "#FFFFFF",
							border: "1px solid #D6E4FF",
							borderRadius: "32px",
							padding: "clamp(2rem, 5vw, 4rem)",
							boxShadow: "0 30px 80px rgba(21, 101, 192, 0.08)",
							textAlign: "center",
						}}
					>
						<h1
							style={{
								fontSize: "clamp(2.5rem, 7vw, 4.75rem)",
								lineHeight: 1,
								letterSpacing: "-2px",
								fontWeight: 800,
								color: "#0D1B2A",
								marginTop: "1rem",
								marginBottom: "1.25rem",
								fontFamily: "'DM Sans', sans-serif",
							}}
						>
							Coming Soon
						</h1>

						<p
							style={{
								maxWidth: "620px",
								margin: "0 auto",
								fontSize: "1.05rem",
								lineHeight: 1.8,
								color: "#2C4A6E",
								fontFamily: "'DM Sans', sans-serif",
							}}
						>
							We are building the YPark driver experience for finding nearby
							parking zones with more speed, clarity, and confidence.
						</p>

						<div
							style={{
								marginTop: "2rem",
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
								gap: "1rem",
							}}
						>
							{[
								"Nearby zone discovery",
								"Live availability insights",
								"Cleaner route decisions",
							].map((item) => (
								<div
									key={item}
									style={{
										padding: "1rem 1.25rem",
										borderRadius: "18px",
										background: "#F5F8FF",
										border: "1px solid #E5EEFA",
										color: "#0D1B2A",
										fontSize: "0.95rem",
										fontWeight: 600,
										fontFamily: "'DM Sans', sans-serif",
									}}
								>
									{item}
								</div>
							))}
						</div>

						<div
							style={{
								marginTop: "2.5rem",
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								gap: "0.875rem",
							}}
						>
							<Link
								href="/"
								className="btn-primary"
								style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: "180px",
									padding: "0.95rem 1.4rem",
								}}
							>
								Back to Home
							</Link>

							<Link
								href="/partners"
								className="btn-secondary"
								style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: "180px",
									padding: "0.95rem 1.4rem",
								}}
							>
								For Parking Owners
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
