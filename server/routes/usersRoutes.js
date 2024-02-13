router.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw new Error('User already exists');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
  
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });