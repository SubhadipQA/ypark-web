import Link from "next/link";

const zoneTypes = [
	{
		icon: "🛣️",
		title: "Govt Authorized",
		subtitle: "Street bays, roadside",
		accent: "#F57F17",
		accentBg: "#FFF8EC",
		accentBorder: "#FFE0B2",
		features: [
			"Walk-in tracking",
			"Monthly passes",
			"Cash & UPI",
			"Staff logging",
		],
		href: "/partners",
		cta: "List This Zone →",
	},
	{
		icon: "🏢",
		title: "Private Parking",
		subtitle: "Buildings, compounds",
		accent: "#1565C0",
		accentBg: "#EBF1FF",
		accentBorder: "#BDD2FF",
		features: [
			"Walk-in tracking",
			"Monthly passes",
			"Cash, UPI & card",
			"Staff logging",
			"Advance booking",
			"Numbered spaces",
		],
		href: "/partners",
		cta: "List This Zone →",
	},
	{
		icon: "🏛️",
		title: "YAdmin",
		subtitle: "Multi-zone operators & govt bodies",
		accent: "#00BCD4",
		accentBg: "#E8FAFE",
		accentBorder: "#B2EBF2",
		// badge: "Enterprise",
		features: [
			"All-zone command dashboard",
			"City-level revenue analytics",
			"Bulk staff management",
			"Zone performance comparison",
			"Approval workflows",
			"Custom reporting",
		],
		href: "/yadmin",
		cta: "Request a Demo →",
	},
];

export default function ForOwners() {
	return (
		<section
			id="parking-types"
			style={{
				background: "linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
				borderTop: "1px solid #D6E4FF",
				position: "relative",
			}}
		>
			<div className="section-wrap section-pad">

				{/* ── Header ── */}
				<div
					style={{
						maxWidth: "42rem",
						marginBottom: "2.25rem",
					}}
				>
					<span
						className="section-label"
						style={{ color: "#00BCD4" }}
					>
						For Owners
					</span>
					<h2
						className="section-heading"
						style={{
							maxWidth: "36rem",
							color: "#0D1B2A",
						}}
					>
						Built for every parking model operators actually run.
					</h2>
					<p
						className="section-sub"
						style={{
							marginTop: "1rem",
							color: "#2C4A6E",
						}}
					>
						Whether you manage a single roadside bay or dozens of zones across a city — YPark has the right product for your scale. Start with the app, grow into YAdmin.
					</p>
				</div>

				{/* ── Cards grid ── */}
				<div
					className="for-owners-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "1.25rem",
					}}
				>
					{zoneTypes.map((zone) => (
						<div
							key={zone.title}
							className="for-owners-card"
							style={{
								background: "#FFFFFF",
								border: `1px solid ${zone.accentBorder}`,
								borderLeft: `4px solid ${zone.accent}`,
								borderRadius: "1rem",
								padding: "1.75rem",
								display: "flex",
								flexDirection: "column",
								minHeight: "100%",
								transition: "box-shadow 0.2s ease, transform 0.2s ease",
								boxShadow: "0 2px 12px rgba(21, 101, 192, 0.06)",
							}}
						>
							{/* Icon + badge row */}
							<div style={{
								display: "flex",
								alignItems: "flex-start",
								justifyContent: "space-between",
								marginBottom: "1rem",
							}}>
								<div style={{
									width: "44px",
									height: "44px",
									borderRadius: "10px",
									background: zone.accentBg,
									border: `1px solid ${zone.accentBorder}`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "1.3rem",
									lineHeight: 1,
								}}>
									{zone.icon}
								</div>
								{zone.badge && (
									<span style={{
										fontSize: "0.62rem",
										fontWeight: 700,
										color: "#00BCD4",
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										padding: "0.25rem 0.625rem",
										borderRadius: "9999px",
										background: "#E8FAFE",
										border: "1px solid #B2EBF2",
										fontFamily: "'DM Sans', sans-serif",
									}}>
										{zone.badge}
									</span>
								)}
							</div>

							{/* Title + subtitle */}
							<div style={{ marginBottom: "1.25rem" }}>
								<h3
									style={{
										color: "#0D1B2A",
										fontSize: "1.2rem",
										fontWeight: 700,
										lineHeight: 1.2,
										marginBottom: "0.35rem",
										fontFamily: "'DM Sans', sans-serif",
									}}
								>
									{zone.title}
								</h3>
								<p
									style={{
										color: "#506A84",
										fontSize: "0.88rem",
										lineHeight: 1.6,
										fontFamily: "'DM Sans', sans-serif",
										margin: 0,
									}}
								>
									{zone.subtitle}
								</p>
							</div>

							{/* Features */}
							<div style={{ flex: 1 }}>
								<ul
									style={{
										listStyle: "none",
										display: "grid",
										gap: "0.625rem",
										padding: 0,
										margin: 0,
									}}
								>
									{zone.features.map((feature) => (
										<li
											key={feature}
											style={{
												display: "flex",
												alignItems: "flex-start",
												gap: "0.625rem",
												fontSize: "0.85rem",
												lineHeight: 1.6,
												fontFamily: "'DM Sans', sans-serif",
												color: "#2C4A6E",
											}}
										>
											{/* Checkmark */}
											<div style={{
												width: "16px",
												height: "16px",
												borderRadius: "9999px",
												background: zone.accentBg,
												border: `1px solid ${zone.accentBorder}`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												flexShrink: 0,
												marginTop: "0.15rem",
											}}>
												<svg
													width="8" height="8"
													viewBox="0 0 24 24"
													fill="none"
													stroke={zone.accent}
													strokeWidth="3"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<polyline points="20 6 9 17 4 12" />
												</svg>
											</div>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							{/* CTA */}
							<div style={{ marginTop: "1.75rem" }}>
								<Link
									href={zone.href}
									className="for-owners-cta"
									style={{
										display: "inline-flex",
										alignItems: "center",
										gap: "0.4rem",
										padding: "0.75rem 1.25rem",
										borderRadius: "0.75rem",
										fontSize: "0.85rem",
										fontWeight: 600,
										fontFamily: "'DM Sans', sans-serif",
										textDecoration: "none",
										color: "#FFFFFF",
										background: zone.accent,
										border: `1px solid ${zone.accent}`,
										transition: "opacity 0.2s ease",
									}}
								>
									{zone.cta}
								</Link>
							</div>
						</div>
					))}
				</div>

			</div>

			<style>{`
				@media (min-width: 900px) {
					.for-owners-grid {
						grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
					}
				}

				.for-owners-card:hover {
					box-shadow: 0 8px 32px rgba(21, 101, 192, 0.12) !important;
					transform: translateY(-2px) !important;
				}

				.for-owners-cta:hover {
					opacity: 0.88;
				}
			`}</style>
		</section>
	);
}