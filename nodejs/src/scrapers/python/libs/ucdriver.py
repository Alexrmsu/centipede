import undetected_chromedriver as uc
import os

def get_driver(hdl : bool=False):
    driver = uc.Chrome(headless=hdl,use_subprocess=True)
    return driver

def dynamic_dir():
    return os.path.dirname(os.path.realpath(__file__))

def hide_cpu(driver):
    driver.execute_cdp_cmd('Emulation.setCPUThrottlingRate', {'rate': 4})
    return driver


def spoofing_driver(driver, user_agent):
    driver.execute_cdp_cmd('Network.setUserAgentOverride', {"userAgent": user_agent})
    return driver