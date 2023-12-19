class DataGenerator
{
    generateRandorString()
    {
        return Math.random().toString(36).substring(2);
    }

}

module.exports = new DataGenerator();