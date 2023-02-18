
import { Builder, Capabilities, By } from "selenium-webdriver"


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    // await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button shows choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const drawButton = await driver.findElement(By.id('draw'))
		await drawButton.click()
		await driver.sleep(2000);
		const enabled = await choices.isEnabled()
		expect(enabled).toBe(true)
})

test('Tapping add to duo, shows player duo', async () => {
	const choices = await driver.findElement(By.id('choices'))
	const drawButton = await driver.findElement(By.id('draw'))
	await drawButton.click();
	await driver.sleep(2000);
	const addToDuoButton = await driver.findElement(By.xpath("//*[contains(@class, 'bot-btn')]"))
	await addToDuoButton.click();
  const playerDuo = await driver.findElement(By.id('player-duo'))
	const enabled = await playerDuo.isEnabled()
	expect(enabled).toBe(true)

})
 
