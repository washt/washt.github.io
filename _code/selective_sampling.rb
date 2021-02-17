
samples = []
File.open('../assets/img/c_b.jpg') do |_in|
  if in % 4 == 0
    samples.push(in)
  end
end
