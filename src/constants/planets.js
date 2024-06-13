export const PLANETS = {
	mercury: {
		overview: {
			img: 'planet-mercury.svg',
			name: 'MERCURY',
			description:
				"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
			rotationtime: '58.6 DAYS',
			revolutiontime: '87.97DAYS',
			radius: '2,439.7 KM',
			averagetemp: '430ºC'
		},
		structure: {
			img: 'planet-mercury-internal.svg',
			name: 'MERCURY',
			description:
				"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
		},
		surface: {
			img: 'planet-mercury.svg',
			geology: 'geology-mercury.png',
			name: 'MERCURY',
			description:
				"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
		}
	},
	venus: {
		overview: {
			img: 'planet-venus.svg',
			name: 'VENUS',
			description:
				"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
			rotationtime: '243 DAYS',
			revolutiontime: '224.7DAYS',
			radius: '6,051.8 KM',
			averagetemp: '471ºC'
		},
		structure: {
			img: 'planet-venus-internal.svg',
			name: 'VENUS',
			description:
				'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.'
		},
		surface: {
			img: 'planet-venus.svg',
			name: 'VENUS',
			geology: 'geology-venus.png',
			description:
				'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.'
		}
	},
	earth: {
		overview: {
			img: 'planet-earth.svg',
			name: 'EARTH',
			description:
				"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
			rotationtime: '0.99 DAYS',
			revolutiontime: '365.26 DAYS',
			radius: '6,371 KM',
			averagetemp: '16ºC'
		},
		structure: {
			img: 'planet-earth-internal.svg',
			name: 'EARTH',
			description:
				"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
		},
		surface: {
			img: 'planet-earth.svg',
			name: 'EARTH',
			geology: 'geology-earth.png',
			description:
				'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.'
		}
	},
	mars: {
		overview: {
			img: 'planet-mars.svg',
			name: 'MARS',
			description:
				"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
			rotationtime: '1.03 DAYS',
			revolutiontime: '1.88 YEARS',
			radius: '3,389.5 KM',
			averagetemp: '-28 ºC'
		},
		structure: {
			img: 'planet-mars-internal.svg',
			name: 'MARS',
			description:
				'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.'
		},
		surface: {
			img: 'planet-mars.svg',
			name: 'MARS',
			geology: 'geology-mars.png',
			description:
				'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.'
		}
	},
	jupiter: {
		overview: {
			img: 'planet-jupiter.svg',
			name: 'JUPITER',
			description:
				'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
			rotationtime: '9.93 HOURS',
			revolutiontime: '11.86 YEARS',
			radius: '69,911 KM',
			averagetemp: '-108 ºC'
		},
		structure: {
			img: 'planet-jupiter-internal.svg',
			name: 'JUPITER',
			description:
				"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
		},
		surface: {
			img: 'planet-jupiter.svg',
			name: 'JUPITER',
			geology: 'geology-jupiter.png',
			description:
				'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.'
		}
	},
	saturn: {
		overview: {
			img: 'planet-saturn.svg',
			name: 'SATURN',
			description:
				'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
			rotationtime: '10.8 HOURS',
			revolutiontime: '29.46 YEARS',
			radius: '58,232 KM',
			averagetemp: '-138 ºC'
		},
		structure: {
			img: 'planet-saturn-internal.svg',
			name: 'SATURN',
			description:
				"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
		},
		surface: {
			img: 'planet-saturn.svg',
			name: 'SATURN',
			geology: 'geology-saturn.png',
			description:
				"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. "
		}
	},
	uranus: {
		overview: {
			img: 'planet-uranus.svg',
			name: 'URANUS',
			description:
				'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
			rotationtime: '17,2 HOURS',
			revolutiontime: '84 YEARS',
			radius: '25,362 KM',
			averagetemp: '-195 ºC'
		},
		structure: {
			img: 'planet-uranus-internal.svg',
			name: 'URANUS',
			description:
				"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
		},
		surface: {
			img: 'planet-uranus.svg',
			name: 'URANUS',
			geology: 'geology-uranus.png',
			description:
				"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
		}
	},
	neptune: {
		overview: {
			img: 'planet-neptune.svg',
			name: 'NEPTUNE',
			description:
				'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
			rotationtime: '16.08 HOURS',
			revolutiontime: '164.79 YEARS',
			radius: '24,622 KM',
			averagetemp: '-201 ºC'
		},
		structure: {
			img: 'planet-neptune-internal.svg',
			name: 'NEPTUNE',
			description:
				"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
		},
		surface: {
			img: 'planet-neptune.svg',
			name: 'NEPTUNE',
			geology: 'geology-neptune.png',
			description:
				"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
		}
	}
};
