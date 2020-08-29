
## Selenium - Set up

~~I decided to create an automation tool that lets you submit code to BOJ.~~ (can't do it due to ReCaptcha). So instead, I'm doing it with Codeforces.

## Selenium + Java + Chrome
I decided to go with Java instead of Python because of well formatted documentations.

## Setting Up
1. Install Java (already done)
2. Install Eclipse (already done)
3. Install Selenium
  + Go to this Selenium [Download](https://selenium.dev/downloads/) and install the client for Java.
  + unzip this folder
4. Open up eclipse and create a project
  + right click on your project, properties, Java build and path, and import all your `.jar` files (don't forget those inside`lib` repo as well).
5. Install Chrome WebDriver from [here](https://sites.google.com/a/chromium.org/chromedriver/downloads).
  + Double check your chrome webbrowser's version (`Help` -> `About Google Chrome`)
  + I had version 78 but was using `ChromeDriver 79` and couldn't run it.

## Sample Code
```java
public static void main(String[] args) throws Throwable
{
    // You can add a path to your `$PATH` for the chromedriver and ignore below 2 lines
    String exePath = "/home/myoiwrites/Documents/github/boj-auto-submit/chromedriver_linux64/chromedriver";
    System.setProperty("webdriver.chrome.driver", exePath);

    WebDriver driver = new ChromeDriver();
    driver.get("http://www.google.com/");
    Thread.sleep(5000);  // Let the user actually see something!
    driver.quit();
}
```

# Selenium - Headless Chrome

Completed basic functionality of opening the cf and submitting its code,
But I wanted to do all these via command line, meaning I don't want to see pages popping up.

I realized there's a thing you can use for this, `headless`.

## How its used
Before I connect webdriver to Google Chrome, I give an option to Chrome using `ChromeOptions`.

```java
public static void initChromeDriver()
{
    final String driverPath = PATH_TO_CHROME_DRIVER;
    System.setProperty("webdriver.chrome.driver", driverPath);

    ChromeOptions options = new ChromeOptions();
    options.addArguments("--headless", "--window-size=1920,1200");
    driver = new ChromeDriver(options);
}
```

In the beginning, I forgot to pass in `options` to `new ChromeDriver()` and wasted time figuring out why its not working.

If you're on Windows machine, we need to add `--disable-gpu` option as well for some reason.

## Reference
- https://www.toolsqa.com/selenium-tutorial/
- https://hackernoon.com/introduction-to-headless-chrome-with-java-b591bc4764a0
