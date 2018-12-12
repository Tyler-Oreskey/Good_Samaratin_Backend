module.exports = {
	development: {
		client: `pg`,
		connection: `postgres://localhost/samaritan_dev`
	},
	test: {},
	production: {
		client: `pg`,
		connection: "postgres://infuoipovstise:ed9c635d315b4601e6e2081e49890db5adc63e702eb85b346845742db894abdf@ec2-23-21-65-173.compute-1.amazonaws.com:5432/d18hr2oif32ec4"
	}
}
