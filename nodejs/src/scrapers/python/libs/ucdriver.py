import undetected_chromedriver as uc

def get_driver():
    driver = uc.Chrome(headless=False,use_subprocess=True)
    return driver