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
						"radial-gradient(circle at top, rgba(26, 48, 72, 0.45), transparent 40%), linear-gradient(180deg, #0D1B2A 0%, #13273D 100%)",
					paddingTop: "7rem",
					paddingBottom: "3.5rem",
					position: "relative",
					overflow: "hidden",
					borderBottom: "1px solid #1A3048",
				}}
			>
				<div
					className="dot-pattern"
					style={{
						position: "absolute",
						inset: 0,
						opacity: 0.4,
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
							background: "rgba(12, 24, 38, 0.72)",
							border: "1px solid rgba(139, 168, 200, 0.16)",
							borderRadius: "32px",
							padding: "clamp(2rem, 5vw, 4rem)",
							boxShadow: "0 30px 80px rgba(0, 0, 0, 0.28)",
							backdropFilter: "blur(10px)",
							textAlign: "center",
						}}
					>
						<span className="section-label">For Drivers</span>

						<h1
							style={{
								fontSize: "clamp(2.5rem, 7vw, 4.75rem)",
								lineHeight: 1,
								letterSpacing: "-2px",
								fontWeight: 800,
								color: "#E8F4FD",
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
								color: "#AFC4DA",
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
										background: "rgba(24, 46, 69, 0.7)",
										border: "1px solid rgba(139, 168, 200, 0.12)",
										color: "#D7E6F5",
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
								style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: "180px",
									padding: "0.95rem 1.4rem",
									borderRadius: "999px",
									background: "#10B981",
									color: "#062A1E",
									textDecoration: "none",
									fontWeight: 800,
									fontFamily: "'DM Sans', sans-serif",
								}}
							>
								Back to Home
							</Link>

							<Link
								href="/partners"
								style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: "180px",
									padding: "0.95rem 1.4rem",
									borderRadius: "999px",
									background: "transparent",
									color: "#D7E6F5",
									textDecoration: "none",
									fontWeight: 700,
									fontFamily: "'DM Sans', sans-serif",
									border: "1px solid rgba(139, 168, 200, 0.24)",
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
