## Vue Test Utils
### Triggering Events
Kullanıcı tarafından yapılacak olan girişleri dinlemek en temel durumlardan birisidir. Bu durumun kontrolünü Jest oldukça kolaylaştırmaktadır.
Görev:
Örneğin bir formumuz olsun. Bu formun submit anında input box'a girilen değerin sayfada render edilmesi gerektiği farz edelim. Şayet TDD sürecine uygun hareket ediyorsak aşağıda adımları gerçeklememiz gerekmektedir.

1. component'i mount et
2. input box'a bir seçici ver ve bunu yakalayıp içini doldur.
3. form elementini bul ve submit olayını tetikle
4. girilen değerin render edileceği element'e bir seçici ver input'a girilen değerin sayfada render edilip edilmediğini kontrol et

Yukarıda yazdığımız senaryoyu gerçekleştirelim.

    it("render input value when form submitted", () => {
	    const wrapper = mount(FormComponent) --1
	    
	    await wrapper.find("[data-username]").setValue("ata") --2
	    await wrapper.find("form").trigger("submit.prevent") --3
		expext(wrapper.find('.msg').text())
			.toBe("ata") --4
    })
### Testing Emitted Events
Bildiğimiz üzere child component ve parent component arasında veri iletişimi mümkündür. Bu durum veriyi nereden gönderdiğinize bağlı olarak aşağıda şekilde incelenir.

- Parent Component  ------ props(data)  -----> Child Component
- Child Component    ------  emit(data)   -----> Parent Component

Senaryo:
Child component içinde bulunan input'a girilen bilgileri parent component'e aktarır. Buna göre gerekli olan testimizi yazalım.

1. component'i mount et
2. ne zaman emit edilecek karar ver? (ben bir metod içerisinde emit etmek istiyorum)
3. metodun ismi ne olacak? (sendInputValue) bu metot bir parametre alır.
4. emit ismi ne olacak? (emitInput)


	    it('should emit an event with input value',  function () {  
		    const wrapper = mount(Emitter)
		    expect(wrapper.exists()).toBeTruthy();
		    wrapper.vm.sendInputValue("Hello World")
		    expect(wrapper.emitted().emitInput[0]).toEqual(['Hello World'])
	    });

Burada bilinmesi gereken şey wrapper'a bağlı olan emitted() aşağıdaki gibi tanımlanır.

    wrapper.emitted()
dediğimizde componentimize gider ve orada emit edilmiş olan ögeleri yakalamamıza olanak tanır. ***emitInput*** emitter'e aşağıdaki gibi erişirim.

    wrapper.emitted().emitInput
Bu işlem yapıldığı anda bize dönen değer

    [['Hello World']]
olur.
Dikkat edersek emitter'in kendisi bir dizi şeklinde dönüyor. Ve dahası kendisinden emit edilmesi istenen value ise içinde bir dizi olarak tutuluyor. Yani aşağıdaki işlemi

    wrapper.emitted().emitInput[0]
yaptığım zaman 0. indis'e ulaşırım ve

    ['Hello World']
değerini yakalamış olurum.

Dolayısıyla assertion kısmında kontrolümü **['Hello World']** bu şekilde yaparım.

### Stubbing Components
Stubbing Components denilince anlamamız gereken şey bir başkasının yerine geçen kod parçasıdır.

Örnek olarak A ve B componentlerini ele alalım. B component'i A componentinin child'i olsun.

    Component A
    <template>
	    <B></B>
    </template>

B componentinin created hook'u bir API'ye istek atıyor olsun.

    Component B
    <template>
	    <div></div>
    </template>
    
    created() {
	    //api call
    }

Test yazarken amacımızın sadece A component'i ile alakalı işlemleri yapmak olduğunu düşünelim.


    describe("render component A", () => {
	    it("is A component existed", () => {
		    const wrapper = mount(A)
		    expext(A.exists()).toBeTruthy()
	    })
    })
Bu testi yazdığımızda görürüz ki B'de bulunan created hook API'ye istek atmıştır. Ama bu istediğimiz bir durum değil. Bunu engellemek için mount optionlarından stubs seçeneği kullanılır.

     describe("render component A", () => {
	    it("is A component existed", () => {
		    const wrapper = mount(A, {
			    stubs: {
				    B:true
			    }
		    })
		    expext(A.exists()).toBeTruthy()
	    })
    })
Bu işlemi yaparak B component'i stub edilmiş olur. Yani B dahili bir vazife gören dummy bir kod parçasına dönüştürülür.
