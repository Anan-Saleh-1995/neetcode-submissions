struct MyHashMap {
    obj: HashMap<i32, i32>,
}

impl MyHashMap {
    pub fn new() -> Self {
        Self {
            obj: HashMap::new(),
        }
    }

    pub fn put(&mut self, key: i32, value: i32) {
        self.obj.insert(key, value);
    }

    pub fn get(&self, key: i32) -> i32 {
        match self.obj.get(&key) {
            Some(value) => *value,
            None => -1,
        }
    }

    pub fn remove(&mut self, key: i32) {
        self.obj.remove(&key);
    }
}
