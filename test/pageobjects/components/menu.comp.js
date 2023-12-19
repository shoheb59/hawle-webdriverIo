class AllMenuComp {
    menuLink(linkText)
    {
        return $("//div [contains(text(), '"+linkText+"')]")

    }

}
module.exports =  new AllMenuComp();