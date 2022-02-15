import db from "../../src/core/database";
import minifaker from "minifaker"
import 'minifaker/locales/en'

const item = minifaker.domainName()
console.log(item)

async function seedPublisher() {
	const items = Array(10).fill(0).map(_ => ({ name: minifaker.domainName() }))
	console.log("Seeding publisher...")
	const promises = items.map(item => db.publisher.create({
		data: item
	}))
	await Promise.all(promises)
	console.log("Publisher seeded")
}

const seed = async () => {
	await seedPublisher()
}

seed()
