import Link from "next/link";

const zoneTypes = [
	{
		icon: "🛣️",
		title: "Govt Authorized",
		subtitle: "Street bays, roadside",
		accent: "#F57F17",
		features: [
			"Walk-in tracking",
			"Monthly passes",
			"Cash & UPI",
			"Staff logging",
		],
	},
	{
		icon: "🏢",
		title: "Private Parking",
		subtitle: "Buildings, compounds",
		accent: "#1565C0",
		features: [
			"Walk-in tracking",
			"Monthly passes",
			"Cash, UPI & card",
			"Staff logging",
			"Advance booking",
			"Numbered spaces",
		],
	},
];

export default function ForOwners() {
	return (
		<section
			id="parking-types"
			style={{
				background: "#0D1B2A",
				borderTop: "1px solid #1A3048",
				position: "relative",
			}}
		>
			<div className="section-wrap section-pad">
				<div
					style={{
						maxWidth: "42rem",
						marginBottom: "3.5rem",
					}}
				>
					<span className="section-label">For Owners</span>
					<h2 className="section-heading" style={{ maxWidth: "36rem" }}>
						Built for the two parking models operators actually run.
					</h2>
					<p className="section-sub" style={{ marginTop: "1rem" }}>
						Whether you manage roadside government-authorized bays or private building parking, YPark gives you one clean operating system for entries, passes, staff activity, and collections.
					</p>
				</div>

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
								background: "#132236",
								border: "1px solid #1A3048",
								borderLeft: `4px solid ${zone.accent}`,
								borderRadius: "1rem",
								padding: "1.75rem",
								display: "flex",
								flexDirection: "column",
								minHeight: "100%",
								transition: "border-color 0.2s ease",
							}}
						>
							<div style={{ marginBottom: "1.5rem" }}>
								<div
									style={{
										fontSize: "1.5rem",
										lineHeight: 1,
										marginBottom: "0.9rem",
									}}
								>
									{zone.icon}
								</div>
								<h3
									style={{
										color: "#E8F4FD",
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
										color: "#8BA8C8",
										fontSize: "0.9rem",
										lineHeight: 1.7,
										fontFamily: "'DM Sans', sans-serif",
									}}
								>
									{zone.subtitle}
								</p>
							</div>

							<div style={{ flex: 1 }}>
								<ul
									style={{
										listStyle: "none",
										display: "grid",
										gap: "0.75rem",
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
												gap: "0.65rem",
												color: "#8BA8C8",
												fontSize: "0.88rem",
												lineHeight: 1.7,
												fontFamily: "'DM Sans', sans-serif",
											}}
										>
											<span
												aria-hidden="true"
												style={{
													color: "#506A84",
													flexShrink: 0,
													lineHeight: 1.7,
												}}
											>
												•
											</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div style={{ marginTop: "1.75rem" }}>
								<Link
									href="/partners"
									className="btn-primary"
									style={{
										width: "fit-content",
										padding: "0.8rem 1.2rem",
									}}
								>
									List This Zone →
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>

			<style>{`
				@media (min-width: 900px) {
					.for-owners-grid {
						grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
					}
				}

				.for-owners-card:hover {
					border-color: #1E3A5F !important;
				}
			`}</style>
		</section>
	);
}
